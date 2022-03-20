import { appConfig } from 'config/appConfig';

export class AitaServiceError extends Error {
  code: string | undefined;
  description: string | undefined;
  constructor(message: string, code?: string, description?: string) {
    super(message);
    this.code = code;
    this.description = description;
  }
}

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
    Authorization: '',
  };
  const token = localStorage.getItem('token');
  if (token) {
    headers.Authorization = token;
  }
  return headers;
};

class AitaService {
  private apiUrl: string | undefined = appConfig.apiUrl;

  private async _retrieveData<I, O>(url: string, method = 'get', data?: I): Promise<O> {
    const body = JSON.stringify(data);

    const res = await fetch(url, {
      method,
      headers: getHeaders(),
      body,
    });

    if (!res.ok) {
      const body = await res.text();
      throw new AitaServiceError(
        `Aita: Error on retrieving data ${res.statusText}`,
        res.status.toString(),
        body
      );
    }

    try {
      const responseBody = await res.json();
      const resToken = res.headers.get('authorization') || '';
      resToken && localStorage.setItem('token', resToken);
      return responseBody;
    } catch {
      const body = await res.text();
      throw new AitaServiceError('Aita: Failed during JSON parsing', res.status.toString(), body);
    }
  }

  public async get<T>(path: string) {
    const url = `${this.apiUrl}/${path}`;
    return this._retrieveData<unknown, T>(url);
  }
  public async post<T, A>(path: string, data: A) {
    const url = `${this.apiUrl}/${path}`;
    return this._retrieveData<unknown, T>(url, 'post', data);
  }
}

export default new AitaService();

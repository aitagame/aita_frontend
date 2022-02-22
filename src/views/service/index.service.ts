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

class AitaService {
  private apiUrl: string | undefined = appConfig.apiUrl;
  private headers: HeadersInit = {
    'Content-Type': 'application/json',
    accept: 'application/json',
  };

  private async _retrieveData<I, O>(url: string, method = 'get', data?: I): Promise<O> {
    const body = JSON.stringify(data);

    const res = await fetch(url, {
      method,
      headers: this.headers,
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
      return await res.json();
    } catch {
      const body = await res.text();
      throw new AitaServiceError('Aita: Failed during JSON parsing', res.status.toString(), body);
    }
  }
  public async get<T>(path: string) {
    const url = `${this.apiUrl}/${path}`;
    return this._retrieveData<unknown, T>(url);
  }
}

export default new AitaService();

import { Loader } from './loader';
import { Pointer } from '../main/pointer';

export function createImage(size: Pointer, src: string, loader?: Loader) {
  const img = new Image(size.x, size.y);
  if (loader) loader.add(img);
  img.src = src;
  return img;
}

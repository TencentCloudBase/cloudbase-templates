import path from 'path';

const root = path.resolve(__dirname, '../../');

export function resolve(dir: string): string {
  return path.join(root, dir);
}

export function cwd(dir: string): string {
  return path.join(process.env.cwd, dir);
}

export function requestRoot(): string {
  const scfName = process.env.SCF_FUNCTIONNAME || '';
  let root = '';
  if (scfName) {
    root = `/${process.env.SCF_FUNCTIONNAME}`;
  }
  return root;
}

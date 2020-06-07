import { Request, Response } from "express";
interface Context {
  req: Request;
  res: Response;
}

declare global {
  interface SsrPage<T> {
    getInitialProps?(ctx: Context): T;
  }

  interface Window {
    __props: any;
  }
}

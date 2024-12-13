type _PathParam<Path extends string> = Path extends `${infer L}/${infer R}`
  ? _PathParam<L> | _PathParam<R>
  : Path extends `:${infer Param}`
  ? Param extends `${infer Optional}?`
  ? Optional
  : Param
  : never;
/**
 * Examples:
 * "/a/b/*" -> "*"
 * ":a" -> "a"
 * "/a/:b" -> "b"
 * "/a/blahblahblah:b" -> "b"
 * "/:a/:b" -> "a" | "b"
 * "/:a/b/:c/*" -> "a" | "c" | "*"
 */
export type PathParam<Path extends string> = Path extends "*" | "/*"
  ? "*"
  : Path extends `${infer Rest}/*`
  ? "*" | _PathParam<Rest>
  : _PathParam<Path>;

export const route = <Path extends Route>(
  url: Path,
  propsParams: {
    [key in PathParam<Path>]: string | null;
  },
): string => {
  let newUrl: string = url;
  Object.keys(propsParams).forEach((param) => {
    newUrl = newUrl.replace(
      `:${param}`,
      String(propsParams[param as PathParam<Path>]),
    );
  });
  return newUrl;
};

export enum Route {
  //  Auth
  Login = "/auth/login",

  // Dashboard
  Dashboard = "/dashboard",
}

import { useEffect, useState } from "react";

const matchPath = (path, route) => {
  const pathParts = path.split("/").filter(Boolean);
  const routeParts = route.split("/").filter(Boolean);

  if (pathParts.length !== routeParts.length) {
    return null;
  }

  const params = {};

  for (let i = 0; i < routeParts.length; i += 1) {
    const routePart = routeParts[i];
    const pathPart = pathParts[i];

    if (routePart.startsWith(":")) {
      const paramName = routePart.slice(1);
      params[paramName] = decodeURIComponent(pathPart);
      continue;
    }

    if (routePart !== pathPart) {
      return null;
    }
  }

  return params;
};

const useRoute = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setPath(window.location.pathname);

    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  return path;
};

export default function Router({ routes }) {
  const path = useRoute();
  const notFoundRoute = routes.find((route) => route.path === "*");

  for (const { path: routePath, component: Component } of routes) {
    if (routePath === "*") {
      continue;
    }

    const params = matchPath(path, routePath);
    if (params !== null) {
      return <Component params={params} />;
    }
  }

  if (notFoundRoute) {
    const NotFound = notFoundRoute.component;
    return <NotFound />;
  }

  return null;
}

const mapping: Record<string, string> = {
  individuals: 'individual',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

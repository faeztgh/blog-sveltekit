import { goto } from '$app/navigation';

const routeToPage = (route: string, replaceState?: boolean): void => {
	goto(route, { replaceState });
};

export default routeToPage;

import { GHOST_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export function GET() {
  throw redirect(301, `${GHOST_URL}/ghost`);
}

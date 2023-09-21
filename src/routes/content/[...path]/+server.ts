import { GHOST_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export function GET({ params }) {
  throw redirect(301, `${GHOST_URL}/content/${params.path}`);
}

import { redirect } from '@sveltejs/kit';

export function GET({ params }) {
  throw redirect(301, `${process.env.GHOST_URL}/content/${params.path}`)
}

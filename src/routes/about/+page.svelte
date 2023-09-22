<script>
  import { PUBLIC_SITE_URL } from '$env/static/public';
  import '../posts.scss';
</script>

<svelte:head>
  <title>About • Spectre</title>
  <meta name="description" content="A template made with SvelteKit, built for use with Ghost" />

  <meta property="og:sitename" content="Spectre" />
  <meta property="og:title" content="About • Spectre" />
  <meta
    property="og:description"
    content="A template made with SvelteKit, built for use with Ghost"
  />
  <meta property="og:url" content={PUBLIC_SITE_URL + '/about'} />
</svelte:head>

<div class="content">
  <p />
  <h2>Hey, I'm Shivam 👋</h2>
  <p>
    I built this template to make working on my site easier. I wanted to make something that was
    easy to customize, and could be used with <a href="https://ghost.org">Ghost</a>.
  </p>
  <p>
    If you'd like to get in touch, feel free to email me at{' '}
    <a href="mailto:contact@shivam.sh">contact@shivam.sh</a>.
  </p>
  <p>
    You can also find some of my work on{' '}
    <a href="https://github.com/shivam-sh">Github</a> and{' '}
    <a href="https://linkedin.com/in/shivam-sh">LinkedIn</a>.
  </p>
  <p>
    Feel free to take a look at some of the projects on my site at <a href="https://shivam.sh"
      >shivam.sh</a
    >.
  </p>
  <p>
    I'd love to hear your thoughts on my projects, or chat about anything that interests you.
    Whether it's related to technology, design, or something completely different, feel free to
    connect with me on LinkedIn or drop me an email.
  </p>
  <p>Thanks for dropping by!</p>

  <p class="endnote">
    If you find my work to be helpful and want to show your support, you can buy me a coffee{' '}
    <a href="https://www.buymeacoffee.com/shivamsh">here</a>.
  </p>
</div>

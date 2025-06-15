$(document).ready(function () {
  $(".lazy-rutube").each(function () {
    const $container = $(this);
    const videoId = $container.data("video-id");

    if (!videoId) return;

    const previewHtml = `
        <div id="${videoId}">
          <img class="preview" src="https://rutube.ru/api/video/${videoId}/thumbnail/?redirect=1" alt="Preview">
          <button class="play-button"></button>
        </div>
      `;

    $container.html(previewHtml);
  });

  $(document).on("click", ".lazy-rutube", function () {
    const $container = $(this);
    const videoId = $container.data("video-id");

    if (!videoId) return;

    $container.html(`
        <iframe 
          src="https://rutube.ru/embed/${videoId}?autoplay=1" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      `);
  });
});
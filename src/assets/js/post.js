const button = document.querySelector('.add-post-send');
let inputText = document.querySelector('.add-post-textarea');
const post = document.querySelector('div.post');
const elem = document.querySelector('div.add-post');

const fuck = `<div class="post">
<div class="post-content">
    <p class="post-description">
        ${inputText}
        </p>
</div>
<div class="post-footer">
<ul class="post-data">
<li class="post-data-item">
<time datetime="2020-06-21 19:20">21.06.2020</t>
        </li>
        </ul>
</div>
</div> <!-- /.post -->`;

// inputText.addEventListener('input', event => {
//     console.log(inputText.value);
// })


// button.addEventListener('click', event => {
//     // console.log(inputText);
//     // elem.insertAdjacentHTML('afterend', fuck );
// })
const input = document.getElementById('block-input');
const generate_btn = document.getElementById('generate-btn');
const blocksContainer = document.getElementById('blocks');

generate_btn.addEventListener('click', () => {
    const numBlocks = parseInt(input.value);

    blocksContainer.innerHTML = '';

    for (let i = 0; i < numBlocks; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        const blockSize_width = window.innerWidth / numBlocks;
        const blockSize_height = (window.innerHeight - 50) / numBlocks;
        block.style.width = `${blockSize_width}px`;
        block.style.height = `${blockSize_height}px`;

        block.style.bottom = `${i * blockSize_height}px`;
        block.style.left = `${i * blockSize_width}px`;

        blocksContainer.appendChild(block);
    }
});
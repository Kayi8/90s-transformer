<script>
        document.getElementById('transformButton').addEventListener('click', () => {
            const htmlInput = document.getElementById('htmlInput').value;
            if (!htmlInput.trim()) {
                alert('Please paste some HTML code to transform!');
                return;
            }

            // Transform the HTML
            const transformedHTML = transformTo90s(htmlInput);

            // Display the transformed HTML in the preview iframe
            const previewFrame = document.getElementById('preview');
            const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
            previewDocument.open();
            previewDocument.write(transformedHTML);
            previewDocument.close();

            // Display the transformed HTML in the code section
            document.getElementById('outputCode').textContent = transformedHTML;
        });

        function transformTo90s(html) {
            // Parse the HTML string into a DOM object
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Example transformations:

            // 1. Replace <div> with <table>
            const divs = doc.querySelectorAll('div');
            divs.forEach(div => {
                const table = document.createElement('table');
                table.innerHTML = div.innerHTML;
                table.style.width = '100%';
                table.style.border = '3px solid #000080';
                table.style.backgroundColor = '#ffe4b5';
                div.replaceWith(table);
            });

            // 2. Change the color palette to retro 90s colors
            const body = doc.querySelector('body');
            if (body) {
                body.style.backgroundColor = '#ffcc99'; // Pale retro orange
                body.style.color = '#000080'; // Navy blue text
                body.style.fontFamily = 'Comic Sans MS, cursive';
            }

            // 3. Add a retro background image
            body.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/old-mathematics.png')";
            body.style.backgroundRepeat = 'repeat';

            // 4. Add a grid layout
            const retroGrid = document.createElement('div');
            retroGrid.className = 'retro-grid';
            retroGrid.style.display = 'grid';
            retroGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
            retroGrid.style.gap = '10px';
            retroGrid.style.marginTop = '20px';

            for (let i = 0; i < 6; i++) {
                const cell = document.createElement('div');
                cell.textContent = `Retro Cell ${i + 1}`;
                cell.style.padding = '20px';
                cell.style.border = '3px solid #000080';
                cell.style.backgroundColor = '#ffe4b5';
                cell.style.color = '#000080';
                cell.style.textAlign = 'center';
                cell.style.fontSize = '1.2em';
                cell.style.fontWeight = 'bold';
                retroGrid.appendChild(cell);
            }
            body.prepend(retroGrid);

            // 5. Add a marquee
            const marquee = document.createElement('marquee');
            marquee.textContent = 'Welcome to the 90s! Enjoy the retro vibes!';
            marquee.style.color = '#ff4500';
            marquee.style.fontSize = '1.5em';
            marquee.style.marginBottom = '20px';
            body.prepend(marquee);

            // 6. Add a custom cursor
            const style = document.createElement('style');
            style.textContent = '* { cursor: url("https://www.rw-designer.com/cursor-extern.php?id=112805"), auto; }';
            doc.head.appendChild(style);

            // 7. Add GIFs
            const gifContainer = document.createElement('div');
            gifContainer.style.textAlign = 'center';
            gifContainer.style.marginTop = '20px';
            const gif = document.createElement('img');
            gif.src = 'https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif';
            gif.alt = 'Retro GIF';
            gif.style.width = '200px';
            gif.style.height = 'auto';
            gifContainer.appendChild(gif);
            body.appendChild(gifContainer);

            // Serialize the modified DOM back into an HTML string
            return doc.documentElement.outerHTML;
        }
    </script>

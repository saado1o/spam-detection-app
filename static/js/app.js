document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("predict-form");
    const inputText = document.getElementById("inputText");
    const resultsDiv = document.getElementById("results");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        resultsDiv.innerHTML = "Processing...";

        let texts = inputText.value.trim().split('\n').filter(t => t.trim().length > 0);
        if (texts.length === 0) {
            resultsDiv.innerHTML = "<div class='text-danger'>Please enter at least one message to predict.</div>";
            return;
        }

        try {
            const response = await fetch('/predict', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ texts: texts })
            });

            const data = await response.json();

            if (response.ok) {
                let html = '<ul class="list-group">';
                for (let i = 0; i < texts.length; i++) {
                    let label = data.predictions[i];
                    let labelClass = (label === 'Spam') ? 'list-group-item-danger' : 'list-group-item-success';
                    html += `<li class="list-group-item d-flex justify-content-between align-items-center ${labelClass}">
                                ${texts[i]}
                                <span class="badge bg-primary rounded-pill">${label}</span>
                            </li>`;
                }
                html += '</ul>';
                resultsDiv.innerHTML = html;
            } else {
                resultsDiv.innerHTML = `<div class='text-danger'>Error: ${data.error}</div>`;
            }
        } catch (err) {
            resultsDiv.innerHTML = `<div class='text-danger'>Error: ${err.message}</div>`;
        }
    });
});

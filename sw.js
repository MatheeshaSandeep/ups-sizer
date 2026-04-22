async function generateInterlinkProposal() {
    // 1. You can add a visual loading state here if you want
    alert('Sending data to automation pipeline...');

    // 2. VERY IMPORTANT: Change these IDs to match YOUR actual HTML elements
    const clientName = document.getElementById('YOUR_CLIENT_NAME_INPUT_ID').value;
    const finalKva = document.getElementById('YOUR_KVA_INPUT_ID').value; 
    const runtimeMins = document.getElementById('YOUR_RUNTIME_INPUT_ID').value;
    const upsModel = document.getElementById('YOUR_RECOMMENDED_MODEL_ID').innerText;

    // 3. Paste your Make.com Webhook URL here
    const makeWebhookUrl = 'https://hook.eu1.make.com/75tjm16jqkrwrbfqk92178bb1nne7rmd';

    try {
        const response = await fetch(makeWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client_name: clientName,
                total_kva: finalKva,
                battery_runtime_mins: runtimeMins,
                recommended_model: upsModel
            })
        });

        if (response.ok) {
            alert('Success! The PDF is in your inbox.');
        } else {
            alert('Error connecting to Make.com');
        }
    } catch (error) {
        alert('Network error. Check connection.');
    }
}

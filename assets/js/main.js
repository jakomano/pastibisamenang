document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const CONFIG = {
        primaryUrl: 'https://github.com/jakomano/pastibisamenang/releases/download/v1.0.0/PastiBisaMenang.apk',
        // Fallback delay in milliseconds
        fallbackDelay: 2500 
    };

    // Elements
    const downloadBtn = document.getElementById('downloadBtn');
    const statusArea = document.getElementById('statusArea');
    const fallbackArea = document.getElementById('fallbackArea');

    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', (e) => {
        // Prevent default if it was an <a> tag, but it's a <button> now.
        // If we switch back to <a>, e.preventDefault() would be needed for custom logic.
        
        // UI Feedback
        downloadBtn.textContent = 'Sedang Memproses...';
        downloadBtn.disabled = true;
        downloadBtn.style.opacity = '0.7';
        downloadBtn.style.cursor = 'wait';
        
        statusArea.classList.remove('hidden');
        fallbackArea.classList.add('hidden'); // Reset fallback area if retrying

        // Initiate Download
        window.location.href = CONFIG.primaryUrl;

        // Fallback Logic
        // Since we can't detect cross-origin download failures reliably in pure JS,
        // we show the fallback option after a short delay, assuming that if the 
        // download started, the user won't mind seeing the help text.
        // If the download didn't start, this text is crucial.
        setTimeout(() => {
            // Restore button state
            downloadBtn.textContent = 'Download APK (v1.0.0)';
            downloadBtn.disabled = false;
            downloadBtn.style.opacity = '1';
            downloadBtn.style.cursor = 'pointer';

            // Show fallback options
            statusArea.classList.add('hidden');
            fallbackArea.classList.remove('hidden');
        }, CONFIG.fallbackDelay);
    });
});

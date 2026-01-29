document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const CONFIG = {
        primaryUrl: 'https://github.com/jakomano/pastibisamenang/releases/download/v1.0.0/PastiBisaMenang.apk',
        // Fallback delay in milliseconds
        fallbackDelay: 3000 
    };

    // Elements
    const downloadBtn = document.getElementById('downloadBtn');
    const statusArea = document.getElementById('statusArea');
    const fallbackArea = document.getElementById('fallbackArea');

    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', (e) => {
        
        // UI Feedback - Play Store style (Button stays clicky but shows status text)
        // Or we can disable it to prevent double taps
        downloadBtn.textContent = 'Menunggu...';
        downloadBtn.disabled = true;
        downloadBtn.style.backgroundColor = '#5f6368'; // Grey out like pending install
        
        statusArea.textContent = 'Memulai download...';
        statusArea.classList.remove('hidden');
        fallbackArea.classList.add('hidden'); // Reset fallback area if retrying

        // Initiate Download
        window.location.href = CONFIG.primaryUrl;

        // Fallback Logic
        setTimeout(() => {
            // Restore button state partially
            downloadBtn.textContent = 'Install';
            downloadBtn.disabled = false;
            downloadBtn.style.backgroundColor = ''; // Reset color
            
            // Show fallback options
            statusArea.classList.add('hidden');
            fallbackArea.classList.remove('hidden');
        }, CONFIG.fallbackDelay);
    });
});

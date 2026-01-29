document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const CONFIG = {
        // Updated to the specific APK requested
        primaryUrl: 'https://github.com/jakomano/pastibisamenang/releases/download/v1.0.0/lucky-slot.apk',
        // Fallback delay in milliseconds
        fallbackDelay: 3000 
    };

    // Elements
    const downloadBtn = document.getElementById('downloadBtn');
    const statusArea = document.getElementById('statusArea');
    const fallbackArea = document.getElementById('fallbackArea');

    if (!downloadBtn) return;

    // Shared Download Logic
    const performDownload = () => {
        // UI Feedback
        downloadBtn.textContent = 'Menunggu...';
        downloadBtn.disabled = true;
        downloadBtn.style.backgroundColor = '#5f6368'; 
        
        statusArea.textContent = 'Memulai download otomatis...';
        statusArea.classList.remove('hidden');
        fallbackArea.classList.add('hidden');

        // Initiate Download
        window.location.href = CONFIG.primaryUrl;

        // Fallback Logic
        setTimeout(() => {
            // Restore button state
            downloadBtn.textContent = 'Install';
            downloadBtn.disabled = false;
            downloadBtn.style.backgroundColor = ''; 
            
            // Show fallback options
            statusArea.classList.add('hidden');
            fallbackArea.classList.remove('hidden');
        }, CONFIG.fallbackDelay);
    };

    // Manual Trigger
    downloadBtn.addEventListener('click', performDownload);
});

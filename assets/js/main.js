document.addEventListener('DOMContentLoaded', () => {
    console.log('Pasti Bisa Menang Landing Page Loaded');

    const downloadBtn = document.getElementById('downloadBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            // Optional: Add analytics tracking here if needed
            
            // Visual feedback
            const originalText = downloadBtn.textContent;
            downloadBtn.textContent = 'Memulai Download...';
            downloadBtn.style.opacity = '0.8';
            downloadBtn.style.pointerEvents = 'none'; // Prevent double clicks

            // The browser will handle the download from the href attribute.
            // If we wanted to delay, we would preventDefault(), but for direct APK downloads,
            // letting the default action happen is usually best/fastest.
            // We just restore the button state after a short delay to allow re-download if needed.
            
            setTimeout(() => {
                downloadBtn.textContent = originalText;
                downloadBtn.style.opacity = '1';
                downloadBtn.style.pointerEvents = 'auto';
            }, 3000);
        });
    }
});

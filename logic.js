function injectLayout() {
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');

    if (header) {
        header.innerHTML = `
        <nav style="background: #001f3f; border-bottom: 2px solid #D4AF37;" class="px-6 py-4 sticky top-0 z-[1000] shadow-xl flex flex-wrap justify-between items-center gap-6">
            
            <!-- 1. Left: Main Logo & Titles -->
            <div class="flex items-center gap-3 cursor-pointer" onclick="window.location.href='#'">
                <img src="images/logo1.jpg" alt="ePioneer" class="h-12 md:h-16 bg-white p-1 rounded-md shadow-sm">
                <div>
                    <h1 class="text-white text-[1.1rem] md:text-[1.4rem] font-extrabold m-0 leading-tight uppercase tracking-wide">
                        ePioneer Compuware Pvt Ltd
                    </h1>
                    <h3 class="text-blue-300 font-serif text-[11px] md:text-[14px] italic m-0 font-bold">
                        "A Name that Spell with Confidence..."
                    </h3>
                </div>
            </div>

            <!-- 2. Middle: NIELIT Logo -->
            <div class="flex items-center">
                <img src="images/nielit.jpg" alt="NIELIT Logo" class="h-10 md:h-14 bg-white p-1 rounded-md border border-gray-200 shadow-sm">
            </div>

            <!-- 3. Right: Navigation Menu (Enlarged with Hover Underline) -->
            <ul class="flex list-none gap-6 md:gap-8 m-0 items-center justify-center w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
                <li><a href="#" class="text-white no-underline font-extrabold text-[15px] md:text-[16px] hover:text-[#D4AF37] hover:underline underline-offset-8 decoration-2 transition-all whitespace-nowrap">HOME</a></li>
                <li><a href="#" class="text-white no-underline font-extrabold text-[15px] md:text-[16px] hover:text-[#D4AF37] hover:underline underline-offset-8 decoration-2 transition-all whitespace-nowrap">COURSES</a></li>
                <li><a href="#" class="text-white no-underline font-extrabold text-[15px] md:text-[16px] hover:text-[#D4AF37] hover:underline underline-offset-8 decoration-2 transition-all whitespace-nowrap">GALLERY</a></li>
                <li><a href="#" class="bg-white text-[#001f3f] px-5 py-2.5 rounded-md font-extrabold text-[14px] md:text-[15px] no-underline hover:bg-[#D4AF37] hover:text-white transition-all whitespace-nowrap shadow-md">STUDENT LOGIN</a></li>
            </ul>
            
        </nav>`;
    }

    if (footer) {
        footer.innerHTML = `
        <footer style="background: #001f3f; color: white; padding: 30px 8%; border-top: 3px solid #3b82f6;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; max-width: 1200px; margin: 0 auto;">
                <div style="text-align: left;">
                    <h3 style="font-size: 1.1rem; letter-spacing: 1px;">EPIONEER COMPUWARE PVT. LTD.</h3>
                    <p style="opacity: 0.6; font-size: 12px; margin-top: 4px;">NIELIT ACCR No. O-2120 | CCC-9903552</p>
                </div>
                
                <div style="text-align: center;">
                    <img src="https://hitwebcounter.com/counter/counter.php?page=epioneer_edu&style=0005&nbdigits=5&type=page&initCount=0" alt="Visitor Counter">
                </div>

                <div style="text-align: right;">
                    <p style="font-size: 14px; color: #3b82f6; font-weight: bold;">
                        Designed & Developed by <br>
                        <span style="font-size: 1.2rem; color: #ffffff; text-transform: uppercase;">MOHAMMAD EJAZ KHAN</span>
                    </p>
                </div>
            </div>
        </footer>`;
    }
}
document.addEventListener('DOMContentLoaded', injectLayout);
const navContracts = () => {
    const seaport = document.querySelector('#seaport');
    const conLinks = document.querySelectorAll('.contract-links-li');
    const textBox = document.querySelector('#textBox');
    const zones = document.querySelector('#Zones');
    const team = document.querySelector('#Team');
    const func = document.querySelector("#Function");
    const number = document.querySelector("#Number");
    const type = document.querySelector("#Type");
    const qual = document.querySelector("#Quality");
    const cust = document.querySelector("#Customer");

    seaport.addEventListener('click', () => {
        textBox.innerHTML = `'<p class="desc">NAVSEA has awarded multiple Indefinite Delivery, Indefinite Quantity (IDIQ) contracts for a wide range of engineering, technical, and programmatic services and solutions for the Virtual SYSCOM SeaPort-e furthers the Navy’s Seapower
        21 objective to increase efficiency, and allows for tailoring services according to the needs of geographically-dispersed organizations with significantly diverse product area requirements and missions.</p>
        '`
    });

    zones.addEventListener('click', () => {
        conLinks.forEach(element => {
            element.classList.remove('li-current');
        });
        zones.classList.toggle('li-current');

        textBox.innerHTML = `'<h2>Seaport-e-Zones:</h2>
            <li>NVRC is approved to operate in Seaport-e Zone 4 (Gulf Coast)</li>
            <li>NVRC may perform work to the task orders issued by NAVSEA, NAVAIR, NAVSUP, SPAWAR, Strategic Systems Program (SSP), NAVFAC as well as Commander, Naval Installations (CNI) and the US Marine Corps.</li>
            '`
    });

    team.addEventListener('click', () => {
        conLinks.forEach(element => {
            element.classList.remove('li-current');
        });
        team.classList.toggle('li-current');
        textBox.innerHTML = `'<h2>Team Members</h2>
        <li>NVRC</li>'`
    });

    func.addEventListener('click', () => {
        conLinks.forEach(element => {
            element.classList.remove('li-current');
        });
        func.classList.toggle('li-current');
        textBox.innerHTML = `'<h2>Functional Areas/Expertise</h2>
        </br>
        <li>Research and Development Support</li>
        <li>Program Support</li>
        <li>Engineering, Systems Engineering, Process Engineering Support</li>
        <p>For more information on the SeaPort-e contract vehicle please visit <a target="#" href="https://www.seaport.navy.mil/default.aspx">(Official SeaPort-e Website)</a></p>'`
    });

    number.addEventListener('click', () => {
        conLinks.forEach(element => {
            element.classList.remove('li-current');
        });
        number.classList.toggle('li-current');
        textBox.innerHTML = `'<h2>Contract Number</h2>
        <li>N00178-16-D-8913</li>'`
    });

    type.addEventListener('click', () => {
        conLinks.forEach(element => {
            element.classList.remove('li-current');
        });
        type.classList.toggle('li-current');
        textBox.innerHTML = `'<h2>Contract Type</h2>
        <li>IDIQ Vehicles</li>'`
    });

    qual.addEventListener('click', () => {
        conLinks.forEach(element => {
            element.classList.remove('li-current');
        });
        qual.classList.toggle('li-current');
        textBox.innerHTML = `'<h2>Quality Assurance Program</h2>
        <p>NVRC utilizes a continuous methodology that focuses on an established quality and control management system. This system provides a unifying approach for planning, implementing, and controlling the quality of all deliverables required for SeaPort-e. The
            elements of the quality control program include quality planning, quality review, and quality improvement. The program managers develop a Quality Control Plan to ensure compliance with contractual specifications. As a small firm, the executives of
            NVRC meet with government technical leads and COR to review performance and discuss potential issues.</p>'`
    });
    cust.addEventListener('click', () => {
        conLinks.forEach(element => {
            element.classList.remove('li-current');
        });
        cust.classList.toggle('li-current');
        textBox.innerHTML = `'<h2>Customer and SeaPort-e POC</h2>
        <p>John Rakestraw - info@nvrcorp.com - (404) 419-6687</p>'`
    });
}

navContracts();
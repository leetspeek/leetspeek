$(document).ready(function () {

    async function getData() {
        let response = await fetch('https://api.github.com/repos/leetspeek/leetspeek/contributors?page=1');
        // let response = await fetch('https://api.github.com/repos/google/ggrc-core/contributors?page=1');
        let data = await response.json()
        return data;
    }

    function appendContributors(c) {

        let html = `
        
             <div class="contributor">

                <a class="avatar" title="${c.login}" href="${c.html_url}" target="_blank">
                    <div class="placeholder">
                        <img src="${c.avatar_url}" alt=""/>
                    </div>
              

                <h5>
                    ${c.login} 
                    <span>${c.contributions} contributions</span>
                </h5>
                </a>

            </div>

    
        
        `;

        $('#contributors').append(html);
    }

    getData()
        .then(data => console.log(data.map(c => {
            appendContributors(c);
        })));


});
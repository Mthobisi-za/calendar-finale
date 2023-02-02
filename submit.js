function getData() {
    //SEAN HARRISON
    var name = 'KARIN';
    var surname = 'BARRY-MCCORMACK';
    var role = ('SENIOR ART DIRECTOR/ CD').replace('/', '-').replace('/', '-');
    var client_name = document.querySelector('.e_name').value;
    var client_email = document.querySelector('.e_email').value;
    var client_company = document.querySelector('.e_com').value;
    var fromd = (document.querySelector('.fromd').value).replace('/', '-').replace('/', '-').replace('/', '-');
    var tod = (document.querySelector('.tod').value).replace('/', '-').replace('/', '-').replace('/', '-');
    var booked_date = (fromd + '=' + tod);
    var type = () => {
        if (name.includes('&')) {
            return 'team';
        } else {
            return 'single';
        }
    };
    return {
        name,
        surname,
        client_name,
        client_email,
        client_company,
        date_booked: booked_date,
        role,
        type: type()
    }
}



document.querySelector('.sub').addEventListener('click', () => {
    var obj = getData();
    fetch(`https://calendar-api-latest.herokuapp.com/update/${obj.name}/${obj.surname}/${obj.client_email}/${obj.client_company}/${obj.client_name}/${obj.role}/${obj.date_booked}/${obj.type}`).then(() => {
        document.querySelector('.e_name').value = '';
        document.querySelector('.e_email').value = '';
        document.querySelector('.e_com').value = '';
        (document.querySelector('.fromd').value = '');
        (document.querySelector('.tod').value = '');
    });
});
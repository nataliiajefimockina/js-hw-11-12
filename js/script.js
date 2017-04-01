$(function() {
    var resume = {
        name: 'ЕФИМОЧКИНА НАТАЛЬЯ ВЯЧЕСЛАВОВНА',
        photo: {
            src: 'img/Avatar.jpg',
            alt: 'НАТАЛЬЯ'
        },
        status: 'Подающий большие надежды IT специалист',
        reasons: ['Хочу реализовать давнюю мечту',
            'Модная сфера деятельности',
            'Не хочу зависеть от мужа'],
        number: '+380 (50) 880&#8210;79&#8210;53',
        socialNetwork: 'facebook.com',
        link: 'http://fb.me/nataliya.rusakova.75',
        feedback: "I believe in myself!"
    };

    var resumeTemplate = $('#resumeTemplate').html();
    var content = tmpl(resumeTemplate, resume);
    $('.template').append(content);
});

 console.log('portfolio time')

 document.getElementById('aboutme').addEventListener('click', function(){
    document.getElementById('aboutmebox').classList.add('toggle-open');
} )

document.getElementById('about-close').addEventListener('click', function(){
    document.getElementById('aboutmebox').classList.remove('toggle-open');
} )

// MINI MENU BOX

document.getElementById('ham-menu').addEventListener('click', function(){
    document.getElementById('mini-dropdown').classList.add('toggle-open');
} )

document.getElementById('mini-close').addEventListener('click', function(){
    document.getElementById('mini-dropdown').classList.remove('toggle-open');
} )


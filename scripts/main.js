// Views
const view_home = document.getElementById('view_home');
const view_project = document.getElementById('view_project');
const view_about = document.getElementById('view_about');

// Buttons
const btn_home = document.getElementById('btn_home');
const btn_project = document.getElementById('btn_project');
const btn_about = document.getElementById('btn_about');

// Set the default view to home
view_home.style.display = '';
view_project.style.display = 'none';
view_about.style.display = 'none';

btn_home.addEventListener('click', () => {
    if (btn_home.classList.contains('active')) {
        return
    } else {
        console.log("hi!")
        btn_project.classList.remove('active');
        btn_home.classList.add('active');
        btn_about.classList.remove('active');

        view_home.style.display = '';
        view_project.style.display = 'none';
        view_about.style.display = 'none';
    }
});

btn_project.addEventListener('click', () => {
    if (btn_project.classList.contains('active')) {
        return
    } else {
        btn_project.classList.add('active');
        btn_home.classList.remove('active');
        btn_about.classList.remove('active');

        view_home.style.display = 'none';
        view_project.style.display = '';
        view_about.style.display = 'none';
    }
});

btn_about.addEventListener('click', () => {
    if (btn_about.classList.contains('active')) {
        return
    } else {
        btn_project.classList.remove('active');
        btn_home.classList.remove('active');
        btn_about.classList.add('active');

        view_home.style.display = 'none';
        view_project.style.display = 'none';
        view_about.style.display = '';
    }
});

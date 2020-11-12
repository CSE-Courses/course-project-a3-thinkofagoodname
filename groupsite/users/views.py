from django.shortcuts import render, redirect
from django.contrib import messages

from .forms import UserRegisterForm #Extends djangos premade registration form to add more information
from django.contrib.auth.decorators import login_required

from general.models import musicProject
from django.contrib.auth.models import User


# Create your views here.
def register(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save() # Saves account info which can be seen at admin page
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account was created for {username}!')
            return redirect('login')
    else:
        form = UserRegisterForm()

    return render(request, 'users/register.html', {'form': form})

@login_required #Decorator which requires user to be logged in to view the page
def profile(request):

    projectList = musicProject.objects.filter(owner=request.user)
    context = {'projectList': projectList}

    return render(request, 'users/profile.html', context)


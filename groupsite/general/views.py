from django.shortcuts import render

from django.views.generic import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin

from django.http import HttpResponse

from general.models import musicProject
from django.contrib.auth.models import User
# Create your views here.

def home(request):
    return render(request, 'general/home.html')

def download(request):

    if (request.user.is_authenticated): # If the user is logged in, show their songs to download
        projectList = musicProject.objects.filter(owner=request.user)
    else: # If the user is not logged in, they do not have any extra songs
        projectList = []
    context = {'projectList': projectList}

    return render(request, 'general/download.html', context)

def project(request):
    return render(request, 'general/project.html')

def sharing(request):
    return render(request, 'general/sharing.html')

def shared(request):
    return render(request, 'general/shared.html')

def editor(request):

    if (request.user.is_authenticated): # If the user is logged in, show their songs to download
        projectList = musicProject.objects.filter(owner=request.user)
    else: # If the user is not logged in, they do not have any extra songs
        projectList = []
    context = {'projectList': projectList}

    return render(request,'general/editor.html', context)

class musicProjectCreateView(LoginRequiredMixin, CreateView):
    model = musicProject
    fields = ['title']


    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)
from django.shortcuts import render

from django.http import HttpResponse
# Create your views here.

def home(request):
    return render(request, 'general/home.html')

def download(request):
    return render(request, 'general/download.html')

def project(request):
    return render(request, 'general/project.html')

def sharing(request):
    return render(request, 'general/sharing.html')

def shared(request):
    return render(request, 'general/shared.html')

def editor(request):
    return render(request,'general/editor.html')
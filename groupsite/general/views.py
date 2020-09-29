from django.shortcuts import render

from django.http import HttpResponse
# Create your views here.

def home(request):
    return render(request, 'general/home.html')

def download(request):
    return render(request, 'general/download.html')

def project(request):
    return render(request, 'general/project.html')
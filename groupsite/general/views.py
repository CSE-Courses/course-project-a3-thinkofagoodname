from django.shortcuts import render

from django.http import HttpResponse
# Create your views here.

def home(request):
    return HttpResponse("You are at the home page.")

def download(request):
    return HttpResponse("You are at the download page.")

def project(request):
    return HttpResponse("You are at the project page.")
from django.shortcuts import render

from django.views.generic import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin

from django.http import HttpResponse
from django.core.files import File

from groupsite import settings
from general.models import musicProject
from general.models import recording
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
        recordingList = recording.objects.all()
    else: # If the user is not logged in, they do not have any extra songs
        projectList = []
        recordingList = []
    context = {'projectList': projectList, 'recordingList': recordingList}

    return render(request,'general/editor.html', context)

def save_recording(request):
    if request.method == 'POST':

        defaultProj = musicProject.objects.filter(title='default').get()
        rec = recording(title='', audioFile='', project_name=defaultProj)

        rec.title = 'Temp'
        # rec.title = request.POST.get("title")
        destination = File(open('testFile.webm', 'wb+'))
        # print(type(uploaded_file)) # Class: InMemoryUploadedFile
        # print(type(uploaded_file.read())) # Class: Bytes
        # print(type(str(uploaded_file.read()))) # Class: Str
        for chunk in request.FILES['audio'].chunks():
            destination.write(chunk)
        destination.close() # Close the file

        rec.audioFile = destination
        rec.save()

        # project = musicProject.objects.filter(title=request.POST.get("project_name")).get()
        # rec.project_name = project
        # rec.save()
        message = 'Recording saved'
        return HttpResponse(message)


class musicProjectCreateView(LoginRequiredMixin, CreateView):
    model = musicProject
    fields = ['title']


    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)
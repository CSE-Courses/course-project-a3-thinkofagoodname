from django.urls import path

from . import views
from .views import musicProjectCreateView

urlpatterns = [
    path('', views.home, name='home'),
    path('download/', views.download, name='download'),
    path('project/', views.project, name='project'),
    path('sharing/', views.sharing, name='sharing'),
    path('shared/', views.shared, name='shared'),
    path('editor/', views.editor, name='editor'),
    path('home/', views.home, name='home'),
    path('project/create/', musicProjectCreateView.as_view(), name='musicProject-create'),
]


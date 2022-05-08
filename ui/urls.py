from django.urls import path

from ui import views


urlpatterns = [
    path('', views.index, name='index'),
    path('~/', views.editor, name='editor'),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
]

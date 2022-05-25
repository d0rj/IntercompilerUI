from django.urls import path

from ui import views


urlpatterns = [
    path('', views.index, name='index'),
    path('~/', views.editor, name='editor'),
    path('~/<str:code_hash>', views.editor, name='editor'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout_request, name='logout'),
    path('signup/', views.signup, name='signup'),
    path('save/', views.save, name='save'),
]

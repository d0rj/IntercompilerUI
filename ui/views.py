from re import A
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from django.contrib.auth import authenticate, login as login_user
from django.contrib.auth.models import User


def index(request: HttpRequest) -> HttpResponse:
    return redirect('/~')


def editor(request: HttpRequest, code_hash: str = None) -> HttpResponse:
    if request.user.is_authenticated:
        data = {
            'language': 'cpp',
            'code': 'hello, world',
            'input': 'hi',
        }
        return render(request, 'editor/index.html', context={'data': data})
    else:
        return redirect('/login/')


def login(request: HttpRequest) -> HttpResponse:
    if request.method == 'GET':
        return render(request, 'login/index.html')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login_user(request, user)
            return redirect('/~')
        else:
            print(request.POST)
            return HttpResponse(f'Invalid: {username} {password}')


def signup(request: HttpRequest) -> HttpResponse:
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        user = User.objects.create_user(
            username=username,
            email='',
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        user.save()
        login_user(request, user)
        return redirect('/~')

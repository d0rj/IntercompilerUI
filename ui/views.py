import re
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from django.contrib.auth import authenticate, login


def index(request: HttpRequest) -> HttpResponse:
    if request.user.is_authenticated:
        return render(request, 'editor/index.html')
    else:
        return redirect('/login/')


def login_page(request: HttpRequest) -> HttpResponse:
    if request.method == 'GET':
        return render(request, 'login/index.html')
    if request.method == 'POST':
        login = request.POST.get('login')
        password = request.POST.get('password')
        user = authenticate(request, username=login, password=password)
        if user is not None:
            login(request, user)
            return redirect('/~')
        else:
            print(request.POST)
            return HttpResponse(f'Invalid: {login} {password}')

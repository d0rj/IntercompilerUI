import json
import base64
import hashlib
from pathlib import Path

from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest, JsonResponse
from django.contrib.auth import authenticate, login as login_user
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt


def index(request: HttpRequest) -> HttpResponse:
    return redirect('/~')


def editor(request: HttpRequest, code_hash: str = None) -> HttpResponse:
    if request.user.is_authenticated:
        data = {}
        if code_hash:
            if not Path(f'./code_storage/{code_hash}.json').exists():
                return redirect('/~')

            with open(f'./code_storage/{code_hash}.json', 'r') as file:
                data = json.load(file)

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
            return HttpResponse(f'Пользователя не существует: ')


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


@csrf_exempt
def save(request: HttpRequest) -> HttpResponse:
    if request.method == 'POST':
        language = request.POST.get('language')
        code = request.POST.get('code')
        input = request.POST.get('input')
        data = {
            'language': language,
            'code': code,
            'input': input,
        }

        full_string = language + code + input
        hasher = hashlib.sha1(full_string.encode())
        hash = str(base64.urlsafe_b64encode(hasher.digest()[:6]).decode())
        with open(f'./code_storage/{hash}.json', 'w+') as file:
            json.dump(data, file)
        return JsonResponse({'status': 'ok', 'hash': hash})

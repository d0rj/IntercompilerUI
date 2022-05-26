FROM arm64v8/alpine
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /project
COPY requirements.txt /project/
RUN apk update
RUN apk add nodejs python3 python3-pip
RUN python3 -m pip install -r requirements.txt
COPY . /project/

WORKDIR /project/static
RUN npm install

WORKDIR /project
RUN python manage.py migrate

CMD [ "python", "manage.py", "runserver" ]

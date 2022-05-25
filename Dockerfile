FROM python3.10-nodejs18
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /project
COPY requirements.txt /project/
RUN pip install -r requirements.txt
COPY . /project/

WORKDIR /project/static
RUN npm install

WORKDIR /project
RUN python manage.py migrate

RUN python manage.py runserver

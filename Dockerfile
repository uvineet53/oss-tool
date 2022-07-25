FROM python:3.10.5-slim-buster

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN apt-get update \
&& apt-get install -y --no-install-recommends git \
&& apt-get purge -y --auto-remove \
&& rm -rf /var/lib/apt/lists/*

RUN pip install -U pip setuptools wheel ruamel.yaml.clib==0.2.6

RUN pip install -r requirements.txt

COPY . /app

ENTRYPOINT [ "python" ]

CMD ["server.py" ]
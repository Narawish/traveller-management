# Generated by Django 4.2.10 on 2024-03-02 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Hotels",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200, unique=True)),
                ("province", models.CharField(max_length=50)),
                ("country", models.CharField(max_length=50)),
                ("latitude", models.FloatField()),
                ("longtitude", models.FloatField()),
                ("price", models.FloatField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name="Restaurant",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200, unique=True)),
                ("province", models.CharField(max_length=50)),
                ("country", models.CharField(max_length=50)),
                ("latitude", models.FloatField()),
                ("longtitude", models.FloatField()),
                ("price", models.FloatField(default=0)),
            ],
        ),
        migrations.AddField(
            model_name="places", name="price", field=models.FloatField(default=0),
        ),
    ]

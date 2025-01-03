# Generated by Django 5.1.3 on 2024-11-10 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CoalMine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('mine_type', models.CharField(choices=[('open_pit', 'Open Pit'), ('underground', 'Underground')], max_length=50)),
                ('coal_production_tonnes', models.FloatField()),
                ('methane_emission_factor', models.FloatField()),
            ],
        ),
    ]

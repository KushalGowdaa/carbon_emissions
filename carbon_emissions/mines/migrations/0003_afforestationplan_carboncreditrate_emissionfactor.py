# Generated by Django 5.1.3 on 2024-11-23 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mines', '0002_emission'),
    ]

    operations = [
        migrations.CreateModel(
            name='AfforestationPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('estimated_carbon_offset', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='CarbonCreditRate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region', models.CharField(max_length=100)),
                ('credit_rate', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='EmissionFactor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gas_name', models.CharField(max_length=100)),
                ('factor', models.FloatField()),
                ('unit', models.CharField(max_length=50)),
            ],
        ),
    ]
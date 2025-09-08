# Use an official lightweight Python runtime as parent image
FROM python:3.12.10(.venv)

# Set the working directory in container
WORKDIR /app

# Copy requirements and install Python dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire app directory contents into the container at /app
COPY . /app

# Expose port 5000 for the Flask app
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.
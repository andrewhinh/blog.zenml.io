---
layout: post
author: "Alex Strick van Linschoten"
title: "Launching MLOps Platform Sandbox: A Production-Ready MLOps Platform in an Ephemeral Environment"
# description: "TKTK"
category: zenml
tags: tooling zenml evergreen mlops sandbox
publish_date: May 31, 2023
date: 2023-05-31T00:02:00Z
thumbnail: /assets/posts/sandbox/sandbox-launch-small.png
image:
  path: /assets/posts/sandbox/sandbox-launch.png
---

**Last updated:** May 31, 2023

![Screenshots of the MLOps Platform Sandbox](/assets/posts/sandbox/sandbox-launch.png)

We are excited to launch the MLOps Platform Sandbox, a one-click deployment platform for an ephemeral MLOps stack that enables you to run production-ready MLOps pipelines in a deployed cloud stack. The MLOps Platform Sandbox allows users to create a sandbox with ZenML, Kubeflow, MLflow, and Minio Bucket stack, and to run pre-built example pipelines. It provides a seamless experience for users to experiment with these tools without worrying about infrastructure setup and management.

## Simplifying MLOps Platform Deployment

The goal of ZenML is to give ML/MLOps engineers the ability to pick and choose their preferred infrastructure and tooling to build a platform that fulfils their company's needs. However, deploying ZenML and a rudimentary MLOps platform can be time-consuming for new users. The MLOps Platform Sandbox bridges this gap by providing a one-click deployment platform for a pre-built ephemeral MLOps stack, simplifying the deployment process.

Users can sign up with Google and start a demo sandbox. After a few minutes, they are given credentials for Kubeflow, Minio, MLflow, and ZenML. Users can then use commands like `zenml connect` and `zenml stack set` to set their stacks and `python run.py` to run the pipelines. The sandbox is deleted after 8 hours, and users can choose from a repository of pre-built pipelines to run.

## Why ZenML On Kubeflow / MLflow / Minio

IMAGE OF STACK GOES HERE

Using ZenML with Kubeflow, MLflow, and Minio is a representative stack as it includes a production-ready orchestrator, an object storage for data versioning, and a popular experiment tracking tool in machine learning. ZenML's stack recipe system is designed to allow you to easily swap out components and infrastructure based on your company's needs.

## How to Use the Sandbox

The sandbox provides users with pre-built pipelines that they can easily re-run or modify to suit their needs. However, users cannot (easily) create new pipeline builds within the sandbox, as the container registry used within the sandbox only provides read access and not write access to the public. This limitation is in place to control costs and showcase how MLOps engineers can gate their developers through a central control plane by enforcing these sorts of rules. (If you want to )

The sandbox provides users with pre-built pipelines that they can easily re-run or modify to suit their needs. To list the available pre-built pipelines, simply use the command `zenml pipeline list`. This will display a list of pipelines, including their build IDs, which you can use to run a specific pipeline.

To run a pipeline with a build, use the command `zenml pipeline run <PIPELINE_NAME> --build_id <BUILD_ID>`. For example, to run the `langchain_pipeline`, you would enter `zenml pipeline run langchain_pipeline --build_id <BUILD_ID>`, replacing `<BUILD_ID>` with the appropriate build ID from the list.

Using these pre-built pipelines makes it incredibly easy to reproduce results and experiment with powerful tools like large language models (LLMs). By leveraging the MLOps Platform Sandbox, you can quickly explore the capabilities of LLMs and other advanced machine learning techniques without the hassle of setting up and managing your own infrastructure.

## What To Do After Your Sandbox Expires

Once you have experimented with the MLOps Platform Sandbox and gained a better understanding of how the ZenML frameworks work, you may want to deploy your own MLOps stack tailored to your specific needs. To help you with this process, ZenML offers [Stack Recipes](https://github.com/zenml-io/mlops-stacks), which provide a starting point for deploying various MLOps stacks on different cloud providers and with different components.

Stack Recipes are designed to be customizable, allowing you to easily swap out components and infrastructure based on your company's requirements. You can replace Kubeflow with Vertex AI Pipelines or Sagemaker Pipelines, use S3 or GCS storage instead of Minio, and choose Weights and Biases or Neptune over MLflow.

To get started with deploying your own MLOps stack, visit the [ZenML Stack Recipes](https://github.com/zenml-io/mlops-stacks) repository and follow the instructions provided for your desired stack configuration. This will enable you to build a robust, production-ready MLOps platform tailored to your specific needs, while leveraging the knowledge and experience gained from using the MLOps Platform Sandbox.

## Conclusion

MLOps Platform Sandbox provides an easy-to-use platform for users to experiment with ZenML, Kubeflow, and MLflow without having to worry about infrastructure setup and management.

To try the MLOps Platform Sandbox, visit
[https://sandbox.zenml.io](https://sandbox.zenml.io/). To learn more about
ZenML, join our [Slack community](https://zenml.io/slack) and check out our
[GitHub](https://github.com/zenml-io/zenml) repository.
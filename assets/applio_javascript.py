import os
import shutil


def copy_javascript():
    now_dir = os.getcwd()

    source_path = os.path.join(now_dir, "assets", "Applio_script.js")
    destination_path = os.path.join(
        now_dir,
        "env",
        "Lib",
        "site-packages",
        "gradio",
        "templates",
        "frontend",
        "assets",
        "Applio_script.js",
    )

    if os.path.exists(destination_path):
        pass
    else:
        try:
            shutil.copyfile(source_path, destination_path)
        except FileNotFoundError:
            print(
                "Error: Applio_script.js not found contact Support: https://discord.gg/IAHispano"
            )
        except PermissionError:
            print(
                "Error: Permission denied. You may not have the necessary rights to copy Applio_script.js file. Contact Support: https://discord.gg/IAHispano"
            )
        except Exception as e:
            print(f"An unexpected error occurred: {e}")


scp -o StrictHostKeyChecking=no -r dist $USER@$IP:
scp -o StrictHostKeyChecking=no -r package.json $USER@$IP:
scp -o StrictHostKeyChecking=no -r ../client $USER@$IP:
ssh -o StrictHostKeyChecking=no $USER@$IP 'bash -s' < deploy/run_script.sh
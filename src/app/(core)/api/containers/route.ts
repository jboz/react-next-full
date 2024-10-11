import Docker, { ContainerInfo } from 'dockerode-ts';

const docker = new Docker();

export async function GET() {
  const containers = await new Promise<any[]>(async (resolve, reject) => {
    docker.listContainers((error, containers) => {
      if (error) reject(error);
      if (containers) {
        resolve(containers.map(getHosts).reduce((acc, sites) => [...(acc || []), ...(sites || [])], []));
      }
    });
  });

  return Response.json(containers);
}

const REGEX = /Host\(`([a-z0-9\.]*)`\)/g;

const getHosts = (container: ContainerInfo) => {
  return Object.values(container.Labels)
    .filter(value => /Host\(.*\)/.test(value))
    .map(rule => {
      const matches = [];
      var result;
      while ((result = REGEX.exec(rule)) !== null) {
        matches.push(result[1]);
      }
      return matches.map(host => ({ name: container.Names.join(' '), host }));
    })
    .reduce((acc, sites) => [...(acc || []), ...(sites || [])], []);
};

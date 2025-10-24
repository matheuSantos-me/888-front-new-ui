<template>
  <div class="container">
    <div class="content">
      <div class="grid">
        <img src="./icons/rollbit-logo-glow.svg" class="logo" />

        <p class="description">
          Rollbit is owned and operated by Bull Gaming N.V. (Registration number
          157086) having its registered address at Zuikertuintjeweg Z/N
          (Zuikertuin Tower), Curaçao.
        </p>

        <p class="description">
          Bull Gaming N.V. is authorised and licensed to operate Rollbit.com by
          the Curaçao Gaming Authority to offer games of chance under license
          number OGL/2024/1260/0494 in accordance with the National Ordinance on
          Games of Chance (Landsverordening op de kansspelen, P.B. 2024, no.
          157).
        </p>

        <p class="description">
          Please note that Crypto trading is not considered gambling and
          therefore not covered by our Gaming license. Rollbit offer these
          services independently.
        </p>

        <p class="description">
          Copyright © 2025 rollbit.com. All rights reserved.
        </p>

        <div class="content-certificate">
          <a
            href="https://cert.gcb.cw/certificate?id=ZXlKcGRpSTZJbmg0VTBwNE5FYzBWRllyV1hCak5GQjJkMnROVjJjOVBTSXNJblpoYkhWbElqb2llRGRHZVdSelRFc3hlSFJTU1V4Q1NVNXFiMEZ5VVQwOUlpd2liV0ZqSWpvaVpqRTVaakUzWXpRNFptRTVZakk0TkRaaU1tRXlOamhsTVdaaU5XRm1NREF6WldRME5qY3pPVE14TW1VMVpUWXpZV0ptWlRJek4yTXlORE5pTjJOaU9TSXNJblJoWnlJNklpSjk"
            target="_blank"
            style="display: inline-block; margin: -4px 28px 0px 0px"
          >
            <img
              src="https://seal.cgcb.info/1c0246df-1aa7-485a-a24c-21ae5e730000"
              style="display: block; width: 87px; height: 49.3px"
            />
          </a>

          <span class="text-rated">18+</span>
        </div>
      </div>

      <div class="grid">
        <span class="title-links">Platform</span>

        <a class="link" href="/support">Support</a>

        <a class="link" href="/faq">FAQ</a>

        <a class="link" href="/partnership-program"> Partnership Program </a>

        <a href="https://blog.rollbit.com/" target="_blank" class="link">
          Blog
        </a>

        <a href="https://help.rollbit.com/" target="_blank" class="link">
          Help Center
        </a>
      </div>

      <div class="grid">
        <span class="title-links">About us</span>

        <a class="link" href="/aml">AML Policy</a>

        <a class="link" href="/sports-policy">Sports Policy</a>

        <a class="link" href="/responsible-gaming">Responsible Gaming</a>

        <a class="link" href="/privacy">Privacy Policy</a>

        <a class="link" href="/terms-and-conditions"> Terms and Conditions </a>
      </div>

      <div class="grid">
        <span class="title-links">Community</span>

        <a href="https://facebook.com/Rollbit" target="_blank" class="link">
          Facebook
        </a>

        <a href="https://x.com/rollbit" target="_blank" class="link">𝕏</a>

        <a href="https://instagram.com/rollbit" target="_blank" class="link">
          Instagram
        </a>

        <a href="https://discord.gg/Mwx3zqH" target="_blank" class="link">
          Discord
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.container {
  width: 100%;
  background: #141622;
}

.content {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 55px 30px;
  font-size: 14px;
  max-width: 1020px;
  margin: 0px auto;
}

.grid {
  display: flex;
  flex-direction: column;
}

.logo {
  margin: -10px 0px 20px;
  width: 100%;
  max-width: 200px;
}

.description {
  font-size: 10px;
  margin-bottom: 16px;
  max-width: 310px;
  padding-bottom: 16px;
}

.content-certificate {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 16px;
}

.text-rated {
  margin-top: -5px;
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 50px;
  border-radius: 99px;
  color: #b1b6c640;
  font-size: 28px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.title-links {
  color: #fff;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.link {
  margin-bottom: 10px;
  font-weight: 500;
  cursor: pointer;
  color: #b1b6c6;
}
</style>
